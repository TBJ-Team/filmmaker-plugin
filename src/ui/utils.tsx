import * as Roact from "@rbxts/roact";
import { FAnimation } from "animation";

const StudioTheme = settings().Studio.Theme;
const GetColor = (e: Enum.StudioStyleGuideColor) => StudioTheme.GetColor(e);
const Get = () => {
	return {
		backgroundMain: GetColor(Enum.StudioStyleGuideColor.MainBackground),
		buttonMain: GetColor(Enum.StudioStyleGuideColor.MainButton),
		textMain: GetColor(Enum.StudioStyleGuideColor.MainText),
	}
};

export type ThemeType = {
	backgroundMain: Color3,
	buttonMain: Color3,
	textMain: Color3
};

export const Theme = Roact.createContext<ThemeType>(Get());
export const Animation = Roact.createContext<FAnimation>(new FAnimation());

export class ThemeController extends Roact.Component {
	
	public render(): Roact.Element | undefined {
		return <Theme.Provider value={Get()}/>
	}

}