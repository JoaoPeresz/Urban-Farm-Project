import {Fragment, useEffect, useState} from "react";
import ViewOffIcon from "@/src/front-end/atoms/view-off-icon";
import ViewIcon from "@/src/front-end/atoms/view-icon";

type Props = {
    stateOffPassword : (statePassword: boolean) => void;
}

export default function ToggleVisibility ({stateOffPassword}: Props){

    const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false)

    useEffect(() => {

    }, [passwordIsVisible]);

    const toggleIconVisibility = () => {
        const newVisibilityState = !passwordIsVisible;
        setPasswordIsVisible(newVisibilityState)
        stateOffPassword(newVisibilityState);
    }

    return (
        <Fragment>
            <div onClick={toggleIconVisibility}>
                {passwordIsVisible ? (
                    <ViewIcon/>
                ) : (
                    <ViewOffIcon/>
                )}
            </div>
        </Fragment>
    )
}