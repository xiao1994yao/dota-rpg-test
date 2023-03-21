import { BaseAbility, registerAbility } from '../utils/dota_ts_adapter';
import { reloadable } from '../utils/tstl-utils';

@reloadable
@registerAbility()
class ability_test extends BaseAbility {
    OnSpellStart(): void {
        print('ability_test');
    }
    OnAbilityPhaseStart(): boolean {
        print('魔法还没被消耗');
        return true;
    }
}
