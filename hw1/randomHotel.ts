import * as _ from 'lodash'
import * as request from 'request-promise-native'

type marketType = 'uk' | 'be' | 'nl';

export class RandomHotel {

    private readonly baseUrl: string;
    private allPackages: any;

    constructor (marketCode: marketType, enviroment = 'integration') {
        if (!['uk', 'be', 'nl'].includes(marketCode)){
            throw new Error('Invalid market code');
        }

        if (!['integration', 'qa', 'staging', 'production'].includes(enviroment)){
            throw new Error('Invalid environment code');
        }

        if (enviroment === 'production') {
            switch (marketCode) {
                case 'uk':
                    this.baseUrl = 'https://www.thomascook.com';
                    break;
                case 'be':
                    this.baseUrl = 'https://www.neckermann.be';
                    break;
                case 'nl':
                    this.baseUrl = 'https://neckermann.nl';
                    break;
            }
            return;
        }

        this.baseUrl = `https://${marketCode}.${enviroment}.thomascook.io`;
    }

    public async initialize (): Promise<void>{
        this.allPackages = await request.get({
            uri: `${this.baseUrl}/api/packages`,
            json: true
        });
    }

    private getHotelNames(): string[] {
        return this.allPackages.items.map(item => {
            return item.hotel.value;
        });
    }
    public getRandomHotelName(): string {
        return _.sample(this.getHotelNames());
    }

}

