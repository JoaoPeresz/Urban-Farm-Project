import { Fragment } from "react";
import PersonIcon from '@mui/icons-material/Person';
import { SvgIconProps } from '@mui/material/SvgIcon';

type Props = {
    fontSize: SvgIconProps['fontSize'];
};

export default function UserIcon({ fontSize }: Props) {
    return (
        <Fragment>
            <PersonIcon cursor={"pointer"} fontSize={fontSize} />
        </Fragment>
    );
}