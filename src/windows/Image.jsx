import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <div className="flex flex-col h-full w-full">
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
                <div className="w-12" />
            </div>

            <div className="preview flex-1">
                {imageUrl && <img src={imageUrl} alt={name} className="w-full h-full object-contain" />}
            </div>
        </div>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
