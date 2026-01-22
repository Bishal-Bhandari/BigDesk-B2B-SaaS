import {Outlet, Link} from 'react-router-dom';
import {SignedIn, SignedOut, UserButton, OrganizationSwitcher, userOrganization} from "@clerk/clerk-react";

function layout(){
    const {organization} = userOrganization();

    return <div className={"layout"}>
            <div className={"nav"}>
                <div className={"nav-container"}>
                    <Link to={"/"} className={"nav-logo"}>
                        TaskBoard
                    </Link>

                    <div className={"nav-links"}>
                        <Link to={"/pricing"} className={"nav-link"}>
                            Pricing
                        </Link>
                    </div>

                    <SignedOut>
                        <Link to={"/sign-in"} className={"nav-link"}>
                            Sign In
                        </Link>
                        <Link to={"/sign-up"} className={"nav-link"}>
                            Sign Up
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <OrganizationSwitcher
                            hidePersonal
                            afterCreateOrganizationURL={"dashboard"}
                            afterSelectOrganizationMode={"modal"}
                            apperance={{
                                elements:{
                                    userPreviewMainIdentifierText__personalWorkspace: {color: "white"},
                                    organizationPreviewMainIdentifier__organizationSwitcherTrigger: {color: "white"}
                                    }
                                }}
                            />
                            {organization &&
                                <Link to={"/dashboard"} className={"nav=link"}>
                                    Dashboard
                                </Link>
                                <UserButton />
                    </SignedIn>
                </div>
            </div>

            <main>
                <Outlet/>
            </main>
        </div>
    }

export default layout