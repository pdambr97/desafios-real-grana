CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    school_name TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new'
);

CREATE TABLE IF NOT EXISTS public.registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
    program_type TEXT NOT NULL,
    message TEXT
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "allow_anon_insert_leads" ON public.leads;
DROP POLICY IF EXISTS "allow_admin_all_leads" ON public.leads;
DROP POLICY IF EXISTS "allow_anon_insert_registrations" ON public.registrations;
DROP POLICY IF EXISTS "allow_admin_all_registrations" ON public.registrations;

CREATE POLICY "allow_anon_insert_leads" ON public.leads
    FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_admin_all_leads" ON public.leads
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "allow_anon_insert_registrations" ON public.registrations
    FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_admin_all_registrations" ON public.registrations
    FOR ALL TO authenticated USING (true) WITH CHECK (true);
