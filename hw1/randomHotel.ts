import * as _ from "lodash";

import * as request from "request-promise-native";

class RandomHotel {

    private _baseUrl: string;
    private _allPackages: any;

    constructor (marketCode, enviroment='integration') {
        if (!['uk', 'be', 'nl'].includes(marketCode)){
            throw new Error('Invalid market code');
        }

        if (!['integration', 'qa', 'staging', 'production'].includes(enviroment)){
            throw new Error('Invalid environment code');
        }

        if (enviroment === 'production') {
            switch (marketCode) {
                case 'uk':
                    this._baseUrl = 'https://www.thomascook.com';
                    break;
                case 'be':
                    this._baseUrl = 'https://www.neckermann.be';
                    break;
                case 'nl':
                    this._baseUrl = 'https://neckermann.nl';
                    break;
            }
            return;
        }

        this._baseUrl = `https://${marketCode}.${enviroment}.thomascook.io`;
    }

    async initialize (){
        this._allPackages = await request.get({
            uri: `${this._baseUrl}/api/packages`,
            json: true
        });
    }

    _getHotelNames(): object {
        return this._allPackages.items.map(item => {
            return item.hotel.value;
        });
    }
    getRandomHotelName(): string {
        return _.sample(this._getHotelNames());
    }

}

export { RandomHotel} ;
