import{ connect, ConnectOptions} from 'mongoose';

export const vasedbConnect = () => {
    connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connected to db"),
        (error) => console.log(error)
    )
}