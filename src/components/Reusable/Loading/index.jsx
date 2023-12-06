import { Wrapper } from "./style";
import loading from '../../../assets/icons/loading.svg'

const Loading = () => {
	return (
		<Wrapper>
			<Wrapper.Box>
				<img src={loading} />
			</Wrapper.Box>
		</Wrapper>
	);
};

export default Loading;