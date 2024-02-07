import React, { useState, useEffect } from "react";
import { Form, FormGroup, Card, CardBody, Label, Input, Button } from "reactstrap";
import { addPost } from "../../Managers/PostManager";
import { useNavigate } from "react-router-dom";

export const PostForm = () => {
  const [imageLocation, setImageLocation] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [publishDateTime, setPublishDateTime] = useState("");
  const [userProfileId, setUserProfileId] = useState("");
  const [categoryId, setCategoryId] = useState("");

  // Use this hook to allow us to programmatically redirect users
  const navigate = useNavigate();

  const submit = (e) => {
    const post = {
      imageLocation,
      title,
      content,
      categoryId: +categoryId,
      publishDateTime,
      userProfileId: +userProfileId,
    };

    addPost(post).then(() => {
      // Navigate the user back to the home route
      navigate("/");
    });
  };

  return (
    <div className="container pt-4">
      <div className="row justify-content-center">
        <Card className="col-sm-12 col-lg-6">
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="userId">User Id (For Now...)</Label>
                <Input
                  type="number"
                  id="userId"
                  value={userProfileId}
                  onChange={(e) => setUserProfileId(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="categoryId">Category Id (For Now...)</Label>
                <Input
                  type="number"
                  id="categoryId"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageUrl">Gif URL</Label>
                <Input
                  id="imageUrl"
                  value={imageLocation}
                  onChange={(e) => setImageLocation(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormGroup>
              
              <FormGroup>
                <Label for="content">Content</Label>
                <Input
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="publishDateTime">Publish Date Time</Label>
                <Input
                  type="datetime-local"
                  id="publishDateTime"
                  value={publishDateTime}
                  onChange={(e) => setPublishDateTime(e.target.value)}
                />
              </FormGroup>
            </Form>
            <Button color="info" onClick={submit}>
              SUBMIT
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};


