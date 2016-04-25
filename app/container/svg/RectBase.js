const mapStateToProps = ({
    shape,
    common
}) => {
    var {
        x,
        y,
        height,
        width
    } = shape, {
        center,
        step
    } = common,
        scaledX = center.x + x * step,
        scaledY = center.y - y * step,
        scaledHeight = height * step,
        scaledWidth = width * step;

    return {
        x: scaledX,
        y: scaledY,
        height: scaledHeight,
        width: scaledWidth
    };
};

export default (shape) => (
    {
        mapStateToProps: (args) => {
            mapStateToProps(args);
        }
    }
);