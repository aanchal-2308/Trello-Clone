<template>
     <div class="list bg-gray-300 rounded-sm p-2 mr-3">
                    <div class="flex justify-between">
                        <div class="text-gray-800 pl-2 font-bold">List Title</div>
                    </div>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                   <AddCardButton></AddCardButton>

                </div>
</template>
<script>
import Card from './Card';
import AddCardButton from './CardAddButton';
export default{
  components: { Card , AddCardButton },
}
</script>

<style scoped>

.list{
    width:250px;
    min-width:250px;
}

</style>