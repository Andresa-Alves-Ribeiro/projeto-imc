import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export function FormHomem() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <section>
                <h1>Preencha os dados abaixo</h1>
            </section>

            <form onSubmit={handleSubmit(onSubmit)} >
                <input name="Peso" type="number"
                    ref={
                        register({
                            required: "O campo precisa ter no mínimo 2 e no máximo 3 caracteres.",
                            min: 2, max: 3,
                        })
                    }
                />
                <ErrorMessage errors={errors} name="primeiro_nome" />

                <input name="Altura" type="number"
                    ref={
                        register({
                            required: "O campo precisa ter no máximo 3 caracteres.",
                            maxLength: 3
                        })
                    }
                />
                <ErrorMessage errors={errors} name="ultimo_nome" />

                <input name="idade" type="number"
                    ref={register({
                        min: 18, max: 99,
                        required: "A idade deve ser entre 18 e 99",
                    })}
                />
                <ErrorMessage errors={errors} name="idade" />

                <input type="submit" />
            </form>
        </div>
    )
}