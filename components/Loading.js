import { LoadingOverlay } from "@mantine/core";

export default function Loading(props) {

    // const [isLoading, setIsLoading] = useState(true)

    return <LoadingOverlay visible={props.isLoading} />
}