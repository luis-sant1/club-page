const eventsModel = require('../models/events')
const { deleteImage, uploadImageEvent } = require('../utils/cloudinary');
var fs = require('fs-extra');

const getAll = async (req, res) => {
    try {
        const result = await eventsModel.find({});
        return res.status(200).json({
            events: result
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

const getOne = async (req, res) => {
    try {
        const { _id } = req.params
        const result = await eventsModel.findById(_id)
        return res.status(200).json({
            events: result
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

const deleteOne = async (req, res) => {
    try {
        const { _id } = req.params
        const result = await eventsModel.findByIdAndDelete(_id)
        return res.status(200).json({
            events: "Evento borrado exitosamente."
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

const create = async (req, res) => {
    try {
        if (!req.file) return res.status(404).json({ messageError: 'Debes agregar una imagen del item' })
        const { path } = req.file;

        const {
            name,
            site,
            img,
            description,
            entryDate,
            exitDate,
            entryHour,
            exitHour
        } = req.body;

        let item = await eventsModel.findOne({ name });
        console.log(item);
        if (item) return res.status(404).json({ messageError: 'Ya existe este item' });

        item = new eventsModel({
            name,
            site,
            img,
            description,
            entryDate,
            exitDate,
            entryHour,
            exitHour
        });
        console.log(item);
        if (path) {
            const result = await uploadImageEvent(path)
            await fs.unlink(path)
            item.img = { public_id: result.public_id, secure_url: result.secure_url }
        }
        await item.save()
        return res.status(200).json({ item: item });
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

const editOne = async (req, res) => {
    try {
        let path;
        if (!!req.file) {
            path = req.file.path;
        }
        const { _id } = req.params;
        console.log(_id)
        const update = req.body;

        if (path !== undefined) {

            let item = await eventsModel.findById(_id)
            console.log('1')
            await deleteImage(item.img.public_id)
            console.log('2')

            const result = await uploadImageEvent(path)
            await fs.unlink(path)
            update.img = { public_id: result.public_id, secure_url: result.secure_url }
            item = await eventsModel.findByIdAndUpdate(_id, update, { new: true })

            return res.status(200).json({ item: "The item has been edited" })
        }
        const item = await eventsModel.findByIdAndUpdate(_id, update, { new: true })
        return res.status(200).json({ item: "The item has been edited" })

    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

const insertData = async (req,res) => {
   try {
    const newEvent1 = new eventsModel({
        name: "Feria Gastronómica",
        site: "Salón de Fiestas",
        img: {
            secure_url: "https://www.institucionaldominicana.com/wp-content/uploads/2022/03/Encabezado-gastromarketing-ferias-gastronomicas-mejorada.jpg"
        },
        description: "Este es un evento para los amantes de la buena comida, donde podrán degustar platos típicos e internacionales, preparados por los mejores chefs del club. La feria gastronómica también tendrá stands de venta de productos locales, música en vivo y sorteos.",
        entryDate: "2023-12-08",
        exitDate: "2023-12-10",
        entryHour:"12:00",
        exitHour:"17:00"
    })
    const newEvent2 = new eventsModel({
        name: "Exposición de Arte",
        site: "Teatro Secundario",
        img: {
            secure_url: "https://www.laguiago.com/wp-content/uploads/2023/02/Aire-Galería-Exposición-Pontevedra-e1675755594646.jpg"
        },
        description: "Este es un evento para los apasionados por el arte, donde podrán admirar las obras de los artistas más destacados del club y de la región. La exposición de arte mostrará pinturas, esculturas, fotografías y otras manifestaciones artísticas, con la posibilidad de comprar o intercambiar algunas piezas.",
        entryDate: "2023-12-12",
        exitDate: "2023-12-15",
        entryHour:"10:00",
        exitHour:"15:00"
    })
    const newEvent3 = new eventsModel({
        name: "Torneo de Ajedrez",
        site: "Salón de Conferencias 2",
        img: {
            secure_url: "https://img.freepik.com/vector-premium/banner-torneo-ajedrez-figuras-ajedrez-blanco_285336-1628.jpg"
        },
        description: "Este es un evento para los aficionados al ajedrez, donde podrán participar en un torneo de alto nivel, con la presencia de algunos maestros y campeones del juego ciencia. El torneo de ajedrez tendrá varias categorías, según la edad y el ranking de los jugadores, y entregará premios en efectivo y trofeos a los ganadores.",
        entryDate: "2023-12-18",
        exitDate: "2023-12-19",
        entryHour:"9:00",
        exitHour:"13:00"
    })
    const newEvent4 = new eventsModel({
        name: "Charla de Motivación",
        site: "Salón de Conferencias 1",
        img: {
            secure_url: "https://previews.123rf.com/images/trueffelpix/trueffelpix1708/trueffelpix170800003/84656527-concepto-de-motivación-banner-con-palabras-clave-e-iconos.jpg"
        },
        description: "Este es un evento para los que buscan mejorar su calidad de vida, con una charla de motivación impartida por un coach profesional. La charla de motivación abordará temas como el autoestima, el liderazgo, la comunicación y el éxito personal, con ejemplos prácticos y dinámicas grupales",
        entryDate: "2023-12-21",
        exitDate: "2023-12-21",
        entryHour:"16:00",
        exitHour:"18:00"
    })
    const newEvent5 = new eventsModel({
        name: "Show de Humor",
        site: "Teatro Principal",
        img: {
            secure_url: "https://i.pinimg.com/1200x/ea/c8/34/eac8344f37ddcf2cdd15a7e488e53769.jpg"
        },
        description: "Este es un evento para los que quieren pasar un rato divertido, con un show de humor protagonizado por un comediante famoso. El show de humor tendrá monólogos, imitaciones, chistes y otras ocurrencias, que harán reír a carcajadas a los asistentes.",
        entryDate: "2023-12-23",
        exitDate: "2023-12-23",
        entryHour:"20:00",
        exitHour:"22:00"
    })
    await newEvent1.save()
    await newEvent2.save()
    await newEvent3.save()
    await newEvent4.save()
    await newEvent5.save()
    return res.status(200).json({
        msg: "All data has been saved"
    })
   } catch (error) {
    console.log(error)
    return res.status(500).json({
        error: error.messageError
    })
   }
}

module.exports = {
    getAll,
    deleteOne,
    create,
    editOne,
    getOne,
    insertData
}