import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://user:<Z7yRsTde0DuVg5fn>@ac-begsqru-shard-00-00.7rdr3mx.mongodb.net:27017,ac-begsqru-shard-00-01.7rdr3mx.mongodb.net:27017,ac-begsqru-shard-00-02.7rdr3mx.mongodb.net:27017/?ssl=true&replicaSet=atlas-28mt7y-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage});