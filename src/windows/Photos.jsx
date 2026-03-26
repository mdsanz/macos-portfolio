import { WindowControls } from "#components";
import { photosLinks, gallery } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

import useWindowStore from "#store/window";

const Photos = () => {
  const { openWindow } = useWindowStore();

  return (
    <div className="flex flex-col h-full">
      <div id="window-header">
        <WindowControls target="photos" />
        <h2 className="flex-1 text-center font-bold text-sm">Photos</h2>
      </div>

      <div className="flex flex-1 min-h-0 overflow-hidden">
        <aside className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map((link) => (
              <li key={link.id}>
                <img src={link.icon} alt={link.title} />
                <p className="whitespace-nowrap">{link.title}</p>
              </li>
            ))}
          </ul>
        </aside>

        <section className="gallery flex-1 overflow-y-auto">
          <ul>
            {gallery.map((photo) => (
              <li key={photo.id}>
                <button
                  className="w-full h-full p-0 border-none bg-transparent cursor-pointer group"
                  onClick={() => openWindow("imgfile", { name: `Photo ${photo.id}`, imageUrl: photo.img })}
                >
                  <img
                    src={photo.img}
                    alt={`Gallery ${photo.id}`}
                    className="transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
