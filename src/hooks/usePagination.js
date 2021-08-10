import { useEffect, useState } from "react";
import { getCharactersWithPagination } from "../services/apiService";

const usePagination = (currentPage) => {
	const pageSize = 10;
	const [offset, setOffset] = useState(0);
	const [data, setData] = useState([]);
	const [error, setError] = useState();

	const getData = async () => {
        try {
            const response = await getCharactersWithPagination({
                offset,
                limit: pageSize,
            });
            if (response.data) {
                setData(response.data);
            } 
        } catch (error) {
            setError(error.message)
        }
		
	};

	useEffect(() => {
		let tempOfset = (currentPage - 1) * pageSize;
		setOffset(tempOfset);
		getData();
	}, [currentPage]);
    useEffect(()=>{
        
        getData();
    },[])
    return {
        data,error
    }
};

export default usePagination;
