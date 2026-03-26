import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile.data;

    if (!data) return null;

    const { name, subtitle, image, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
                <div className="w-12" /> {/* Spacer to balance the controls */}
            </div>

            <div className="p-6 overflow-y-auto max-h-[70vh] bg-white text-black">
                {image && (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-48 object-cover rounded-lg mb-6 shadow-sm"
                    />
                )}
                
                {subtitle && (
                    <h3 className="text-xl font-bold mb-4 text-gray-900 pb-2">
                        {subtitle}
                    </h3>
                )}

                <div className="space-y-4">
                    {description?.map((para, i) => (
                        <p key={i} className="text-sm leading-relaxed text-gray-700">
                            {para}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
