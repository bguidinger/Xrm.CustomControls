import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class SamplePopupControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private _popupService: ComponentFramework.FactoryApi.Popup.PopupService;
	private _button: HTMLButtonElement;
	private _popupName: string;
	private _value: any;

	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) 
	{
        this._button = document.createElement("button");
        this._button.innerText = "Open Popup";
        this._button.addEventListener("click", this.onClick)
		container.appendChild(this._button);
		
		this._popupService = context.factory.getPopupService();
		
		let popupContent = document.createElement('div');
		popupContent.className = "popup-style";
		popupContent.innerText = "Test!";

		this._popupName = "test";
        this._popupService.createPopup({
			type: 1,
			name: this._popupName,
			closeOnOutsideClick: true,
            content: popupContent
        });
	}

	public destroy() {
		this._button.removeEventListener("click", this.onClick);
		this._popupService.deletePopup(this._popupName);
	}

	public updateView(context: ComponentFramework.Context<IInputs>): void { }

	public getOutputs(): IOutputs {
		return {
			value: this._value
		};
	}

	public onClick = (evt: Event) => {
		this._popupService.openPopup(this._popupName);
	}
} 