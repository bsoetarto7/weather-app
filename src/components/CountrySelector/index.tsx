import React from "react";
import { CountryNames } from "../../models";
import "./style.css";

export interface Props {
    handleCountrySelect: (countryName: CountryNames) => void;
    countrySelected: CountryNames;
}

export class CountrySelector extends React.Component<Props> {
    private onCountrySelect(event: React.MouseEvent<HTMLButtonElement>, countryName: CountryNames) {
        event.preventDefault();

        const {
            handleCountrySelect,
        } = this.props;

        handleCountrySelect(countryName);
    }

    public render() {
        const {
            countrySelected,
        } = this.props;
        return (
            <div className="countrySelectorContainer">
                <button
                    className={`countrySelectorBtn${countrySelected === CountryNames.VANCOUVER ? ` btnActive` : ""}`}
                    type="button"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => this.onCountrySelect(event, CountryNames.VANCOUVER)}
                >
                    VANCOUVER
                </button>
                <button
                    className={`countrySelectorBtn${countrySelected === CountryNames.TORONTO ? ` btnActive` : ""}`}
                    type="button"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => this.onCountrySelect(event, CountryNames.TORONTO)}
                >
                    TORONTO
                </button>
                <button
                    className={`countrySelectorBtn${countrySelected === CountryNames.OTTAWA ? ` btnActive` : ""}`}
                    type="button"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => this.onCountrySelect(event, CountryNames.OTTAWA)}
                >
                    OTTAWA
                </button>
            </div>
        );
    }
}

export default CountrySelector;
