import {useOrganization} from "@clerk/clerk-react";
import {PricingTable, CreateOrganization} from "@clerk/clerk-react";

function PricingPage() {
    const {organization, membership} = useOrganization()
    const isAdmin = membership?.role === "org:admin"

    if (!organization) {
        return <div className={"pricing-container"}>
            <div className={"no-org-container"}>
                <h1 className={"no-org-title"}>View Pricing</h1>
                <p className={"no-org-text"}>
                    To view pricing options, please create or join an organization first.
                </p>
                <CreateOrganization afterCreateOrganizationUrl={"/pricing"}/>
            </div>
        </div>
    }

    return <div className={"pricing-container"}>
        <div className={"pricing-header"}>
            <h1 className={"pricing-title"}>Simple, Transparent Pricing</h1>
            <p>
                Choose the plan that fits your organization's needs. Upgrade, downgrade, or cancel anytime.
            </p>
        </div>

        {!isAdmin ? (
            <p className={"text-muted pricing-admin-note"}>
                Note: Only organization admins can view and manage billing details.
            </p>
        ) : (
            <PricingTable for={"organization"} />
        )}
    </div>
}

export default PricingPage