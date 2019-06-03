# Custom Controls

## Controls

### Popup Control
This control demonstrates how to utilize the Popup Service in a custom control.

Due to a [bug](https://powerusers.microsoft.com/t5/PowerApps-Component-Framework/Error-when-invoking-the-openPopup-method-from-the-PopupService/td-p/277927), you will need to modify the PowerApps Component Framework type definitions.  You need to add a `popupStyle` property to the `Popup` interface of `componentframework.d.ts` (approx. line 605):

```
interface Popup {
    id?: string;

    ...

    // Add this line
    popupStyle: any;
}
```

After that, you can build/test as usual.