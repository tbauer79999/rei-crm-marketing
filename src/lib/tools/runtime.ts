import { loadRulebook } from './content-gate';
import { resendMailer } from './mail';
import { leadAppModelClient } from './model';
import type { Deps } from './service';
import { getStore } from './supabase-store';

// Production wiring for the route handlers. Returns null when the rulebook is not live (the routes answer 404 before this matters).
export function makeDeps(defer?: Deps['defer']): Deps | null {
  const rb = loadRulebook();
  if (!rb.ok) return null;
  return { store: getStore(), client: leadAppModelClient, mailer: resendMailer, rulebook: rb.data, defer };
}
