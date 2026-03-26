import useWindowStore from "#store/window";

const WindowControls = ({ target}) => {
  const { closeWindow, minimizeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <button type="button" aria-label="Close" className="close" onClick={() => closeWindow(target)} />
      <button type="button" aria-label="Minimize" className="minimize" onClick={() => minimizeWindow(target)} />
      <button type="button" aria-label="Maximize" className="maximize" disabled />
    </div>
  )
}

export default WindowControls