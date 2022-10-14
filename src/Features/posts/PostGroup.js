import { useSelector } from "react-redux";
import { selectAllTargets } from "../targetsgroup/targetSlice"

const PostGroup = ({ targetId }) => {
    const target = useSelector(selectAllTargets)

    const group = target.find(target => target.id === targetId);

    return <span>by {group ? group.name : 'Unknown group'}</span>
}
export default PostGroup