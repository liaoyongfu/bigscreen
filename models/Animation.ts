import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAnimation extends Document {
    name: string;
    description: string;
    createTime: string;
    code: string;
}

const AnimationSchema: Schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createTime: { type: String, required: true },
    code: { type: String, required: true },
});

const AnimationModel: Model<IAnimation> =
    mongoose.models.Animation || mongoose.model<IAnimation>('Animation', AnimationSchema, 'animations');

export default AnimationModel;
