import { InputHTMLAttributes } from "react";
import {FieldValues, UseFormRegister} from 'react-hook-form'

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    register?: UseFormRegister<FieldValues>,
    error?: string
}
