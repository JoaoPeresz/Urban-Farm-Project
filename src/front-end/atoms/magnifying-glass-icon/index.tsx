import {Fragment} from "react";
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    size: any
}

export default function MagnifyingGlassIcon ({size} : Props) {
    return (
        <Fragment>
                <SearchIcon fontSize={size}/>
        </Fragment>
    )
}