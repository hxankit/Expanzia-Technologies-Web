import mongoose from 'mongoose';

const customerQuerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minLength: [2, 'Name must be at least 2 characters long'],
        maxLength: [50, 'Name cannot exceed 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        match: [/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Please provide a valid phone number']
    },
    idea: {
        type: String,
        required: [true, 'Project idea is required'],
        trim: true,
        minLength: [10, 'Idea description must be at least 10 characters long'],
        maxLength: [1000, 'Idea description cannot exceed 1000 characters']
    },
    query: {
        type: String,
        required: [true, 'Query is required'],
        trim: true,
        minLength: [10, 'Query must be at least 10 characters long'],
        maxLength: [2000, 'Query cannot exceed 2000 characters']
    },
    status: {
        type: String,
        enum: ['new', 'in-progress', 'resolved', 'closed'],
        default: 'new'
    }
}, {
    timestamps: true 
});

export const CustomerQuery = mongoose.model('CustomerQuery', customerQuerySchema);

