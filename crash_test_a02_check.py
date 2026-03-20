#!/usr/bin/env python3
"""Check A02 automation for activity duplication issue"""

import xmlrpc.client

ODOO_URL = "https://lead-machine.odoo.com"
ODOO_DB = "lead-machine"
ODOO_UID = 2
ODOO_API_KEY = "878711e94ffcd5a77c75b516c8df31ce8bb3ea82"

models_proxy = xmlrpc.client.ServerProxy(f"{ODOO_URL}/xmlrpc/2/object")

def odoo_call(model, method, *args, **kwargs):
    return models_proxy.execute_kw(ODOO_DB, ODOO_UID, ODOO_API_KEY, model, method, *args, **kwargs)

print("="*60)
print("Check A02 automation action code (activity duplication)")
print("="*60)

# The test showed 9 duplicate "Lead chaud!" activities being created
# when moving to stage 03. Let's check the action code.

a02 = odoo_call("base.automation", "search_read",
    [[["name", "ilike", "A02"]]],
    {"fields": ["name", "action_server_ids", "trigger", "trigger_field_ids"]})

print(f"A02 automation: {a02[0]['name']}")
print(f"  Trigger: {a02[0]['trigger']}")
print(f"  Trigger fields: {a02[0].get('trigger_field_ids')}")

if a02[0].get("action_server_ids"):
    action_id = a02[0]["action_server_ids"][0]
    action = odoo_call("ir.actions.server", "read", [action_id],
        {"fields": ["name", "code"]})
    print(f"\n  Action: {action[0]['name']}")
    print(f"  Code:\n{action[0].get('code', 'NO CODE')}")

# Check A03 action code too (also triggers on stage 06)
print("\n" + "="*60)
print("Check A03 automation action code")
print("="*60)

a03 = odoo_call("base.automation", "search_read",
    [[["name", "ilike", "A03"]]],
    {"fields": ["name", "action_server_ids", "trigger", "trigger_field_ids"]})

for a in a03:
    print(f"\n{a['name']}:")
    print(f"  Trigger: {a['trigger']}")
    if a.get("action_server_ids"):
        for aid in a["action_server_ids"]:
            action = odoo_call("ir.actions.server", "read", [aid],
                {"fields": ["name", "code"]})
            print(f"  Action: {action[0]['name']}")
            print(f"  Code:\n{action[0].get('code', 'NO CODE')}")

# Check all automations for their trigger conditions (filter_domain_id, filter_pre_domain_id)
print("\n" + "="*60)
print("Check all automation triggers and filters")
print("="*60)

all_auto = odoo_call("base.automation", "search_read", [[]],
    {"fields": ["name", "trigger", "trigger_field_ids", "filter_domain", "filter_pre_domain", "model_name"],
     "order": "name asc"})

for a in all_auto:
    print(f"\n{a['name']}:")
    print(f"  Model: {a['model_name']}")
    print(f"  Trigger: {a['trigger']}")
    print(f"  Trigger fields: {a.get('trigger_field_ids', [])}")
    print(f"  Filter domain (after): {a.get('filter_domain', '')}")
    print(f"  Filter pre-domain (before): {a.get('filter_pre_domain', '')}")
