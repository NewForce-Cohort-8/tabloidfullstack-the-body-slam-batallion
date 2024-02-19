import { useEffect, useState } from "react";
import { Container, Input, InputGroup, Button } from "reactstrap";
import { editTag, getTagById } from "../../Managers/TagManager";
import { useNavigate, useParams } from "react-router-dom";

export const EditTag = () => {
	const [tag, setTag] = useState({
		name: ""
        
	});
	const navigate = useNavigate();
    const { id } = useParams()


    useEffect(() => {
        getTagById(id)
            .then((data) => {
                setTag(data)
            })
        }, [])


	const handleSubmit = (e) => {
		
		return editTag(tag).then(() => navigate("/tag"));
	};
	return (
		<Container>
			<InputGroup>
				<Input
					placeholder='Name'
                    value={tag.name}
					onChange={(e) => {
						const copy = { ...tag };
						copy.name = e.target.value;
						setTag(copy);
					}}
				/>
				<Button color='primary' onClick={(e) => handleSubmit(e)}>
					Save
				</Button>
			</InputGroup>
		</Container>
	);
};