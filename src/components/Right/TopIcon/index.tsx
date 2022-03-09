export interface ITopIconProps {}

export default function TopIcon(props: ITopIconProps) {
  return (
    <ul className="top_ico">
      <li>
        <span className="ico delivery">배달</span>
      </li>
      <li>
        <span className="ico style1">배민</span>
      </li>
    </ul>
  );
}
