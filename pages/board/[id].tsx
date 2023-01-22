import Layout from "@/components/layout";
import { useRouter } from "next/router";

const Board = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
	 <Layout>
		<p>Board id = {id}</p>
	 </Layout>
)};

export default Board;
