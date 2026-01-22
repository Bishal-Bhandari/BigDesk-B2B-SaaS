import {Link} from "react-router-dom"
import {SignedIn, SignedOut, useOrganization, CreateOrganization} from "@clerk/clerk-react";

function HomePage(){

    return <div className={"home-container"}>
        <h1 className={"home-title"}>
            Welcome to Nira Task Management
            <span className={"home-title-accent"}> Made Simple. </span>
        </h1>
        <p className={"home-subtitle"}>
            Streamline your tasks and boost productivity with our intuitive task management solution.
        </p>

        <SignedOut>
            <div className={"home-buttons"}>
                <Link to={"/sign-up"} className={"btn btn-primary btn-lg"}>
                    Start for free.
                </Links>
                <Link to={"/sign-in"} className={"btn btn-outline btn-lg"}>
                    Sign In
                </Links>
            </div>
        </SignedOut>
        <SignedIn>
            {organization ? (
                <Link to={"/dashboard"} className={"btn btn-primary btn-lg"}>
                    Go to Dashboard
                </Link>
                ): <div className= {"home-create-org"}>
                        <CreateOrganization afterCreateOrganizationUrl={"/dashboard"} />
                </div>}
        </SignedIn>
    </div>

    }

export default HomePage