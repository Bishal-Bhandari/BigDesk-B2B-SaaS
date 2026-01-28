import {useOrganization} from "@clerk/clerk-react";
import {PricingTable, CreateOrganization} from "@clerk/clerk-react"

function PricingPage(){
    const {organization, membership} = useOrganization()
    const isAdmin = membership?.role=== "org:admin"

    if (organization){
        return <div className={"pricing-container"}>
            <div className={"no-org-container"}>
                <h1 className={"no-org-title"}>View Pricing</h1>
                <p className={"no-org-text"}>
                    Create or join an organization to view pricing plans.
                    </p>
                <CreateOrganization afterCreateOrganizationUrl={"/pricing"} />
                </div>
            </div>
        }
    return <div className={"pricing-container"}>
        <div className={"pricing-header"}>
            <h1 className={"pricing-title"}>Choose the plan that's right for you</h1>
            <p className={"pricing-subtitle"}>
                Simple and transparent pricing for individuals and teams of all sizes.
            </div>
        {!isAdmin ?(
            <p className={"text-mute pricing-admin-note"}>
                Contact admin to manage your organization's subscription plan.
                </p>
        ):(
            <PricingTable for={"organization"} />
            )}
        </div>
    }

export default PricingPage