import React, { Fragment } from "react";
import classNames from "classnames";
import styles from "./text-field.module.css";

type Props = {
    label: string | JSX.Element;
    title?: boolean;
};

const TextField = ({ label, title = true }: Props) => {
    return (
        <Fragment>
            <div
                className={classNames({
                    [styles.labelTittle]: title,
                    [styles.labelText]: !title,
                })}
            >
                {label}
            </div>
        </Fragment>
    );
};

export default TextField;
