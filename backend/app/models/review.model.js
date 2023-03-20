module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            movie: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Movie"
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user"
            },            title: String,
            description: String,
            stars: Number
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Review = mongoose.model("review", schema);
    return Review;
};
