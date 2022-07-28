import React from "react";
import { CountryNames } from "../../models";
import "./style.css";

export interface Props {
    handleCountrySelect: (countryName: CountryNames) => void;
    countrySelected: CountryNames;
}

export class CountrySelector extends React.Component<Props> {

    public render(){
        return (
            <div className="countrySelectorContainer">
                <button 
                    className={`countrySelectorBtn${this.props.countrySelected === CountryNames.VANCOUVER ? ` btnActive` : ""}`}
                    type="button"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => this.onCountrySelect(event, CountryNames.VANCOUVER)}
                >
                        Vancouver
                </button>
                <button 
                    className={`countrySelectorBtn${this.props.countrySelected === CountryNames.TORONTO ? ` btnActive` : ""}`} 
                    type="button"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => this.onCountrySelect(event, CountryNames.TORONTO)}
                >
                    Toronto
                </button>
                <button 
                    className={`countrySelectorBtn${this.props.countrySelected === CountryNames.OTTAWA ? ` btnActive` : ""}`}
                    type="button"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => this.onCountrySelect(event, CountryNames.OTTAWA)}
                >
                    Ottawa
                </button>
            </div>
        );
    }

    private onCountrySelect(event: React.MouseEvent<HTMLButtonElement>, countryName: CountryNames) {
        event.preventDefault();
        this.props.handleCountrySelect(countryName);
    }
}

export default CountrySelector;
