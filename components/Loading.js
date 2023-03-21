import { LoadingOverlay } from "@mantine/core";
import { Loader } from '@mantine/core';

export default function Loading(props) {

    // const [isLoading, setIsLoading] = useState(true)

    // return <LoadingOverlay visible={props.isLoading} />
    return <Loader color="yellow" size="lg" variant="dots" loading={props.loading} />;
}