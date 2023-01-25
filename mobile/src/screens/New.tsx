import React, { useState } from "react";
import { TextInput, Text, ScrollView, View, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

const avaliableWeekDays = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

export function New() {
	const [weekDays, setWeekDays] = useState<number[]>([]);

	function handleToggleWeekDay(weekDayIndex: number) {
		// caso exista, quer desmacar, se não, quer marcar
		if (weekDays.includes(weekDayIndex)) {
			setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex));
		} else {
			setWeekDays(prevState => [...prevState, weekDayIndex]);
		}
	}

	return (
		<View className="flex-1 bg-background px-8 pt-16">
			<ScrollView 
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 100 }}
			>
				<BackButton />

				<Text className="mt-6 text-white font-extrabold text-3xl">
					Criar Hábito
				</Text>

				<Text className="mt-6 text-white font-semibold text-base">
					Qual o seu comprometimento?
				</Text>

				<TextInput 
					className="h-12 p-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-zinc-400"
					placeholder="Exercícios, dormir bem, etc..."
					placeholderTextColor={colors.zinc[400]}
				/>

				<Text className="mt-4 mb-3 text-white font-semibold text-base">
					Qual a recorrência?
				</Text>

				{ 
					avaliableWeekDays.map((weekDay, index) => (
						<CheckBox
							key={weekDay}
							title={weekDay}
							checked={weekDays.includes(index)}
							onPress={() => handleToggleWeekDay(index)}
						/>
					)) 
				}

				<TouchableOpacity 
					className="w-full h-14 flex-row items-center justify-center bg-violet-900 rounded-md mt-6"
					activeOpacity={0.7}
				>
					<Feather
						name="check"
						size={20}
						color={colors.white}
					/>

					<Text className="font-semibold text-base text-white ml-2">
						Confirmar
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}