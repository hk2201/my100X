export function VideoCard(props: any) {
  return (
    <div className="p-4">
      <img src="/photo.jpg" className="rounded-xl"></img>
      <div className="grid grid-cols-12 pt-4">
        <div className="col-span-1">
          <img className="rounded-full w-12 h-12" src={props.image}></img>
        </div>
        <div className="col-span-11 pl-2">
          <div>{props.title}</div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.author}
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
