import styles from "./CreateIssue.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import cx from "clsx";
import axios from "axios";

import Button from "../components/Button";
import TextField from "../components/TextField";
import { useForm } from "../Hooks.js";
import { GITHUB_API } from "../api.js";
import { useUser } from "../Hooks.js";

export default function CreateIssue() {
  const inputRef = useRef();
  const textareaRef = useRef();
  const navigate = useNavigate();
  const user = useUser();

  console.log({ user });

  const { isSubmitting, inputValues, onChange, errors, handleSubmit } = useForm(
    {
      initialValues: { title: "", body: "" },
      onSubmit: async () =>
        await axios.post(
          `${GITHUB_API}/repos/hyunseok9898/github-issue/issues`,
          inputValues,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
              Accept: "application/vnd.github+json",
              "X-GitHub-Api-Version": "2022-11-28",
            },
          },
        ),
      validate,
      onErrors: () => console.log("error"),
      onSuccess: (result) => {
        console.log({ result });
        navigate("/", { replace: true });
      },
      refs: { title: inputRef, body: textareaRef },
    },
  );

  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={cx(styles.inputWrapper, styles.border)}>
        <form onSubmit={handleSubmit}>
          <TextField
            ref={inputRef}
            name="title"
            placeholder="Title"
            value={inputValues.title}
            onChange={onChange}
            error={errors.title}
          />
          <TextField
            ref={textareaRef}
            type="textarea"
            name="body"
            placeholder="Leave a comment"
            value={inputValues.body}
            onChange={onChange}
            error={errors.body}
          />
          <div className={styles.buttonWrapper}>
            <Button
              type="submit"
              style={{
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
                cursor: "pointer",
              }}
              disabled={isSubmitting}
            >
              Submit new issue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function validate(values) {
  let errors = {};
  if (values.title === "") {
    errors = { title: "타이틀은 필수값입니다." };
  }

  return errors;
}
