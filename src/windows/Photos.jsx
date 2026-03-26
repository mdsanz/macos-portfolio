import { WindowControls } from "#components";
import { photosLinks, gallery } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

import useWindowStore from "#store/window";

const Photos = () => {
  const { openWindow } = useWindowStore();

  return (
    <div className="flex flex-col h-full bg-white/80 backdrop-blur-md">
      <div id="window-header" className="!bg-transparent !border-b-gray-200/50 flex items-center justify-between px-4 py-2">
        <WindowControls target="photos" />
        <h2 className="flex-1 text-center font-bold text-[13px] text-gray-700">Photos</h2>
        <div className="w-16"></div> {/* Spacer to balance window controls */}
      </div>

      <div className="flex flex-1 min-h-0 overflow-hidden">
        <aside className="sidebar !bg-transparent !border-r-gray-200/30">
          <div className="px-4 py-2">
            <h2 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Photos</h2>
            <ul className="space-y-0.5">
              {photosLinks.filter(l => l.title === 'Library').map((link) => (
                <li key={link.id} className="flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer transition-all bg-blue-500 text-white shadow-sm">
                  <img 
                    src={link.icon} 
                    alt={link.title} 
                    className="w-4 h-4 brightness-0 invert" 
                  />
                  <p className="text-[13px] font-medium truncate">{link.title}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="px-4 py-4">
            <h2 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">My Albums</h2>
            <ul className="space-y-0.5">
              {photosLinks.filter(l => l.title !== 'Library').map((link) => (
                <li key={link.id} className="flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer hover:bg-gray-200/50 text-gray-700 transition-all">
                  <img src={link.icon} alt={link.title} className="w-4 h-4 opacity-70" />
                  <p className="text-[13px] font-medium truncate">{link.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="gallery flex-1 overflow-y-auto bg-white/50 p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-black mb-1">Library</h3>
            <p className="text-sm text-gray-500 font-medium">March 2026</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((photo) => (
              <div 
                key={photo.id}
                className="aspect-square rounded-lg overflow-hidden group cursor-pointer border border-gray-200/30 hover:shadow-xl transition-all duration-300"
                onClick={() => openWindow("imgfile", { name: `Photo ${photo.id}`, imageUrl: photo.img })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openWindow("imgfile", { name: `Photo ${photo.id}`, imageUrl: photo.img });
                  }
                }}
              >
                <img
                  src={photo.img}
                  alt={`Gallery ${photo.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
