import { Container } from "../../components/Container";
import { CreateForm } from "./components/CreateForm";
import { Satistics } from "./components/Statistics";
import { TodoList } from "./components/TodoList";

export const TodosPage = () => {
  return (
    <Container>
      <Satistics />
      <CreateForm />
      <TodoList />
    </Container>
  );
};
