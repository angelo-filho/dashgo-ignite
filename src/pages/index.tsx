import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  console.log(errors);

  const HandleSingIn: SubmitHandler<SignInFormData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(HandleSingIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="E-mail"
            type="email"
            error={errors.email as FieldError}
            {...register("email")}
          />

          <Input
            name="password"
            label="Password"
            type="password"
            error={errors.password as FieldError}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          size="lg"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
