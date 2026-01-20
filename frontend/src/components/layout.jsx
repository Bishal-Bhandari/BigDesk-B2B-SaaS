import {Outlet, Link} from 'react-router-dom';
import {SignedIn, SignedOut, UserButton, OrganizationSwitcher, userOrganization} from "@clerk/clerk-react";

function layout(){
    const {organization} = userOrganization();

    return <div>

        </div>
    }