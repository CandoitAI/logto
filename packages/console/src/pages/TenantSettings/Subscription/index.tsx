import { withAppInsights } from '@logto/app-insights/react';

import PageMeta from '@/components/PageMeta';
import useCurrentSubscription from '@/hooks/use-current-subscription';
import useCurrentSubscriptionUsage from '@/hooks/use-current-subscription-usage';
import useSubscriptionPlans from '@/hooks/use-subscription-plans';

import Skeleton from '../components/Skeleton';

import CurrentPlan from './CurrentPlan';
import PlanQuotaTable from './PlanQuotaTable';
import SwitchPlanActionBar from './SwitchPlanActionBar';
import * as styles from './index.module.scss';

function Subscription() {
  const { data: subscriptionPlans, error: fetchPlansError } = useSubscriptionPlans();
  const { data: currentSubscription, error: fetchSubscriptionError } = useCurrentSubscription();
  const { data: subscriptionUsage, error: fetchSubscriptionUsageError } =
    useCurrentSubscriptionUsage();

  const isLoadingPlans = !subscriptionPlans && !fetchPlansError;
  const isLoadingSubscription = !currentSubscription && !fetchSubscriptionError;
  const isLoadingSubscriptionUsage = !subscriptionUsage && !fetchSubscriptionUsageError;

  if (isLoadingPlans || isLoadingSubscription || isLoadingSubscriptionUsage) {
    return <Skeleton />;
  }

  if (!subscriptionPlans || !currentSubscription || !subscriptionUsage) {
    return null;
  }

  const currentSubscriptionPlan = subscriptionPlans.find(
    (plan) => plan.id === currentSubscription.planId
  );

  if (!currentSubscriptionPlan) {
    return null;
  }

  return (
    <div className={styles.container}>
      <PageMeta titleKey={['tenants.tabs.subscription', 'tenants.title']} />
      <CurrentPlan
        subscription={currentSubscription}
        subscriptionPlan={currentSubscriptionPlan}
        subscriptionUsage={subscriptionUsage}
      />
      <PlanQuotaTable subscriptionPlans={subscriptionPlans} />
      <SwitchPlanActionBar
        currentSubscriptionPlanId={currentSubscription.planId}
        subscriptionPlans={subscriptionPlans}
      />
    </div>
  );
}

export default withAppInsights(Subscription);
