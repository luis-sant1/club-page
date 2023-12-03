const salonModel = require('../models/salons')
const { deleteImage, uploadImageEvent } = require('../utils/cloudinary');
var fs = require('fs-extra');

const getAll = async (req, res) => {
    try {
        const results = await salonModel.find({})
        return res.status(200).json({
            data: results
        })
    } catch (error) {
        return res.status(404).json({
            error: error
        })
    }
}

const getOne = async (req, res) => {
    try {
        const result = await salonModel.findById(req.params._id)
        return res.status(200).json({
            salon: result
        })
    } catch (error) {
        return res.status(404).json({
            salon: error
        })
    }
}

const createSalon = async (req, res) => {
    try {
        const urls = [];

        const files = req.files

        for (const file of files) {
            const { path } = file
            const newPath = await uploadImageEvent(path)

            urls.push(newPath)

            fs.unlinkSync(path)

        }
        const { nombre, descripcion, imagen, mts2, site, max, feature, price } = req.body;
        let item = await salonModel.findOne({ nombre });
        if (item) return res.status(404).json({ messageError: 'Ya existe este item' });

        item = new salonModel({ nombre, descripcion, imagen, mts2, site, max, feature, price });
        // console.log(item);
        for (const object of urls) {
            console.log(object)
            item.imagen.push({ public_id: object.public_id, secure_url: object.secure_url })
        }
        await item.save()
        return res.status(200).json({ item: item });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: error
        })
    }
}

const editOne = async (req, res) => {
    try {
        const { _id } = req.params
        const urls = [];

        const files = req.files
        const update = req.body
        console.log('ejecting')
        if (files !== undefined) {

            let item = await salonModel.findById(_id)
            console.log('1')
            for (const imagen of item.imagen) {
                await deleteImage(imagen.public_id)
                console.log(imagen)
            }
            item.imagen = [];   
            update.imagen = [];
            console.log('2')
            console.log(item.imagen)

            for (const file of files) {
                const { path } = file
                const newPath = await uploadImageEvent(path)

                urls.push(newPath)

                fs.unlinkSync(path)

            }
            console.log('3')
            console.log(urls)
            console.log(update.imagen)
            for (const object of urls) {
                // return console.log(object)
                update.imagen.push({ 
                    public_id: object.public_id, secure_url: object.secure_url 
                })
            }
            console.log('ejecting 2')


            item = await salonModel.findByIdAndUpdate(_id, update, { new: true })
            console.log('ejecting 3')
            return res.status(200).json({ item: "The item has been edited" })
        }
        console.log('there is')
        const item = await salonModel.findByIdAndUpdate(_id, update, { new: true })
        return res.status(200).json({ item: "The item has been edited" })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: error
        })
    }
}

const insertMany = async (req, res) => {
    try {
        const newSalon1 = new salonModel({
            "nombre": "Salon de Fiestas",
            "descripcion": "Este es el lugar ideal para celebrar cualquier tipo de evento social, desde cumpleaños hasta bodas. El salón de fiestas tiene una decoración elegante y moderna, con luces, sonido y una pista de baile.Este es el lugar ideal para celebrar cualquier tipo de evento social, desde cumpleaños hasta bodas. El salón de fiestas tiene una decoración elegante y moderna, con luces, sonido y una pista de baile.",
            "imagen": [
                {
                    "public_id": "",
                    "secure_url": "https://media.istockphoto.com/id/492542118/es/foto/elegante-salón-para-banquetes-en-el-interior.jpg?s=1024x1024&w=is&k=20&c=MdCuXKI-LIg8Y9djkqlU0ePPsIvU9Tu2TBnh9R07Q0w="
                },
                {
                    "public_id": "",
                    "secure_url": "https://media.istockphoto.com/id/492391994/es/foto/elegante-salón-para-banquetes-en-el-interior.jpg?s=1024x1024&w=is&k=20&c=cIuLJal1Wy21kjvJWBUYKIGsk7ImetJx1w-FH6i8biI="
                },
                {
                    "public_id": "",
                    "secure_url": "https://media.istockphoto.com/id/492392144/es/foto/elegante-salón-para-banquetes-en-el-interior.jpg?s=1024x1024&w=is&k=20&c=nTsESFSi8KeRCsPzXZmM8WI4DPk04bzvubqSY-hSyKs="
                },
                {
                    "public_id": "",
                    "secure_url": "https://media.istockphoto.com/id/492392288/es/foto/elegante-salón-para-banquetes-en-el-interior.jpg?s=1024x1024&w=is&k=20&c=-09hmrqFNiJoMV7FNQWV1iIIZqUVSE0Eur9P1OYhG6s="
                }
            ],
            "mts2": "300",
            "site": "Interior",
            "max": "200",
            "feature": "Escenario para presentaciones musicales o artísticas",
            "price": "260"
        })
        const newSalon2 = new salonModel({
            "nombre": "Teatro Principal",
            "descripcion": "Este es el espacio más grande y versátil del club, donde se pueden realizar obras de teatro, conciertos, conferencias, cine o cualquier otro tipo de espectáculo. El teatro principal tiene un aforo de 500 butacas, un escenario amplio y equipado, y una excelente acústica.",
            "imagen": [
                {
                    "public_id": "",
                    "secure_url": "https://media.istockphoto.com/id/476806559/es/foto/audience-applauding-ballerina-on-stage-in-theater.jpg?s=1024x1024&w=is&k=20&c=i_LE0PJ-LSrN7OmooAXR2iBfjQLJ3KDpSBaW_vkllvA="
                },
                {
                    "public_id": "",
                    "secure_url": "https://media.istockphoto.com/id/476806561/es/foto/público-aplaudiendo-en-el-teatro.jpg?s=1024x1024&w=is&k=20&c=JFyLXu0RE11ZJbOF6DGzGDgkraV6FvRVo7RHLsdc7HQ="
                },
                {
                    "public_id": "",
                    "secure_url": "https://media.istockphoto.com/id/476806555/es/foto/audience-watching-performer-on-stage-in-theater.jpg?s=1024x1024&w=is&k=20&c=xBNxhv_hDpSI43cyw8rAEP8bMq35F9Uk39Lhb6sAbD0="
                },
                {
                    "public_id": "",
                    "secure_url": "https://media.istockphoto.com/id/476806553/es/foto/audience-watching-ballerina-on-stage-in-theater.jpg?s=1024x1024&w=is&k=20&c=HZnf3kcGVr42HDTlKpxlEyvUiVZG30QX5Pk5A9RmcRg="
                }
            ],
            "mts2": "600",
            "site": "Interior",
            "max": "500",
            "feature": "Tiene un sistema de proyección y pantalla gigante",
            "price": "450"
        })
        const newSalon3 = new salonModel({
            "nombre": "Teatro Secundario",
            "descripcion": "Este es un espacio más íntimo y acogedor, donde se pueden realizar actividades culturales, talleres, exposiciones o reuniones. El teatro secundario tiene un aforo de 100 butacas, un escenario pequeño y sencillo, y una atmósfera cálida.",
            "imagen": [
                {
                    "public_id": "",
                    "secure_url": "https://media.istockphoto.com/id/1295114854/es/foto/sillones-rojos-vacíos-de-un-teatro-listo-para-un-espectáculo.jpg?s=1024x1024&w=is&k=20&c=FFQuwuPq0xa9skLnAX7zessHss4CncbegzosSOVeFqk="
                },
                {
                    "public_id": "",
                    "secure_url": "https://media.istockphoto.com/id/471617031/es/foto/asiento-de-teatro.jpg?s=1024x1024&w=is&k=20&c=GOhog5aXN8FjKblzmVDRL1b3_A6Q5UEkZnQd5BjFf4k="
                },
                {
                    "public_id": "",
                    "secure_url": "https://media.istockphoto.com/id/1349754855/es/foto/vista-de-ángulo-alto-de-asientos-de-cine-rojos-vacíos-en-una-sala-de-cine.jpg?s=1024x1024&w=is&k=20&c=trylHB3TcYibS5GBDDq8CEZuly7AV1k8Bbcm0Q0rGRc="
                },
                {
                    "public_id": "",
                    "secure_url": "https://media.istockphoto.com/id/471617031/es/foto/asiento-de-teatro.jpg?s=1024x1024&w=is&k=20&c=GOhog5aXN8FjKblzmVDRL1b3_A6Q5UEkZnQd5BjFf4k="
                }
            ],
            "mts2": "150",
            "site": "Interior",
            "max": "100",
            "feature": "Tiene una cafetería y una biblioteca anexas",
            "price": "200"
        })
        const newSalon4 = new salonModel({
            "nombre": "Salón de Conferencias 1",
            "descripcion": "Este es un salón diseñado para albergar eventos académicos, empresariales o profesionales. El salón de conferencias 1 tiene una disposición en forma de U, con una mesa central y sillas alrededor. También cuenta con un podio, un micrófono, un proyector y una pizarra. ",
            "imagen": [
                {
                    "public_id": "",
                    "secure_url": "https://previews.123rf.com/images/kasto/kasto1408/kasto140800077/30823876-conferencia-de-negocios-y-presentación-con-público-en-el-salón-de-conferencias.jpg"
                },
                {
                    "public_id": "",
                    "secure_url": "https://previews.123rf.com/images/cc0collection/cc0collection2205/cc0collection220533405/186107942-oficina-trabajo-negocios-conferencia-área-reunión-sala-sillas-perspectiva-ventanas-piso.jpg"
                },
                {
                    "public_id": "",
                    "secure_url": "https://previews.123rf.com/images/dotshock/dotshock1211/dotshock121100816/16581380-grupo-de-felices-j-venes-empresarios-en-una-reuni-n-en-la-oficina.jpg"
                },
                {
                    "public_id": "",
                    "secure_url": "https://previews.123rf.com/images/xixinxing/xixinxing1308/xixinxing130802523/35988009-reunión-de-negocios-en-una-sala-de-conferencias.jpg"
                }
            ],
            "mts2": "100",
            "site": "Interior",
            "max": "80",
            "feature": "Tiene conexión a internet y servicio de catering",
            "price": "80"
        })
        const newSalon5 = new salonModel({
            "nombre": "Salón de Conferencias 2",
            "descripcion": "Este es otro salón similar al anterior, pero con una disposición en forma de auditorio, con filas de sillas y un pasillo central. El salón de conferencias 2 tiene un podio, un micrófono, un proyector y una pizarra.",
            "imagen": [
                {
                    "public_id": "",
                    "secure_url": "https://previews.123rf.com/images/kasto/kasto1408/kasto140800077/30823876-conferencia-de-negocios-y-presentación-con-público-en-el-salón-de-conferencias.jpg"
                },
                {
                    "public_id": "",
                    "secure_url": "https://previews.123rf.com/images/cc0collection/cc0collection2205/cc0collection220533405/186107942-oficina-trabajo-negocios-conferencia-área-reunión-sala-sillas-perspectiva-ventanas-piso.jpg"
                },
                {
                    "public_id": "",
                    "secure_url": "https://previews.123rf.com/images/dotshock/dotshock1211/dotshock121100816/16581380-grupo-de-felices-j-venes-empresarios-en-una-reuni-n-en-la-oficina.jpg"
                },
                {
                    "public_id": "",
                    "secure_url": "https://previews.123rf.com/images/xixinxing/xixinxing1308/xixinxing130802523/35988009-reunión-de-negocios-en-una-sala-de-conferencias.jpg"
                }
            ],
            "mts2": "100",
            "site": "Interior",
            "max": "80",
            "feature": "Tiene aire acondicionado y servicio de traducción simultánea",
            "price": "60"
        })
        await newSalon1.save()
        await newSalon2.save()
        await newSalon3.save()
        await newSalon4.save()
        await newSalon5.save()
        return res.status(200).json({
            data: "all data has been created"
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

const deleteOne = async (req, res) => {
    try {
        const { _id } = req.params;
        const result = await salonModel.findByIdAndDelete(_id);
        return res.status(200).json({
            msg: "Salon eliminado"
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

module.exports = {
    getAll,
    createSalon,
    insertMany,
    getOne,
    deleteOne,
    editOne
}