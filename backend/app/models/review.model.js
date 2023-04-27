module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            movieID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Movie"
            },
            userID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user"
            },
            title: String,
            description: String,
            rating: Number
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
