import Countries from "../models/Countries.js";
import Regions from "../models/Regions.js";
import Cities from "../models/Cities.js";

class countController{

    static countries = async (req, res, next) => {
        try {
            const { page = 1 } = req.query;
            const limit = 50;
            const offset = (page - 1) * limit;
            const countries = await Countries.findAll({
                limit,
                offset,
            });

            const total = await Countries.count();


            res.json({
                status: '200',
                total,
                pages: Math.ceil(total / limit),
                countries
            })

        } catch (e){
            next(e);
        }
    }

    static regions = async (req, res, next) => {
        try {
            const { page = 1, countryId } = req.query;
            const limit = 50;
            const offset = (page - 1) * limit;
            const search = {}
            if (countryId){
                search.countryId = countryId;
            }
            const regions = await Regions.findAll({
                limit,
                offset,
                search
            });

            const total = await Regions.count();


            res.json({
                status: '200',
                total,
                pages: Math.ceil(total / limit),
                regions
            })

        } catch (e){
            next(e);
        }
    }

    static cities = async (req, res, next) => {
        try {
            const { page = 1, regionId } = req.query;
            const limit = 50;
            const offset = (page - 1) * limit;
            const search = {}
            if (regionId){
                search.regionId = regionId;
            }
            const cities = await Cities.findAll({
                limit,
                offset,
                search
            });

            const total = await Cities.count();


            res.json({
                status: '200',
                total,
                pages: Math.ceil(total / limit),
                cities
            })

        } catch (e){
            next(e);
        }
    }

}

export default countController;
